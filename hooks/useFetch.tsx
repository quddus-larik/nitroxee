import axios from 'axios';

async function fetchMyIssuePullRequestComments(username, token) {
    const allMyComments = [];
    let page = 1;
    let hasMore = true;
    
    while (hasMore) {
        try {
            const searchResponse = await axios.get(`https://api.github.com/search/issues?q=commenter:${username}&per_page=100&page=${page}`, {
                headers: {
                    'Authorization': `token ${token}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });

            const issuesAndPrs = searchResponse.data.items;

            for (const item of issuesAndPrs) {
                // `comments_url` correctly points to the comments for that issue/PR
                const commentsResponse = await axios.get(item.comments_url, {
                    headers: {
                        'Authorization': `token ${token}`,
                        'Accept': 'application/vnd.github.v3+json'
                    }
                });

                // Filter to ensure we only include comments made by the current user
                const userComments = commentsResponse.data.filter(comment => comment.user.login === username);
                
                // Add some context to the comment object (like issue/PR title and repo)
                userComments.forEach(comment => {
                    comment.issueOrPullRequest = {
                        title: item.title,
                        number: item.number,
                        url: item.html_url,
                        repository: item.repository_url.split('/').slice(-2).join('/') // Extracts owner/repo
                    };
                });

                allMyComments.push(...userComments);
            }

            // Check for more pages from the Link header
            const linkHeader = searchResponse.headers.link;
            if (linkHeader && linkHeader.includes('rel="next"')) {
                page++;
            } else {
                hasMore = false;
            }

        } catch (error) {
            console.error('Error fetching comments:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
            }
            hasMore = false; // Stop on error
        }
    }

    return allMyComments;
}

// --- Usage Example ---
const GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME'; // Replace with your username
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN'; // Use environment variable for production

if (GITHUB_TOKEN === 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN') {
    console.warn("WARNING: Replace 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN' with your actual GitHub token or set it as an environment variable.");
    console.warn("For Node.js: export GITHUB_TOKEN='ghp_...'");
}

fetchMyIssuePullRequestComments(GITHUB_USERNAME, GITHUB_TOKEN)
    .then(comments => {
        console.log(`Fetched ${comments.length} issue/pull request comments for ${GITHUB_USERNAME}:`);
        // console.log(JSON.stringify(comments, null, 2)); // Uncomment to see full structure
        comments.forEach(comment => {
            console.log(`- Repo: ${comment.issueOrPullRequest.repository}, Issue/PR #${comment.issueOrPullRequest.number} (${comment.issueOrPullRequest.title}): ${comment.body.substring(0, 50)}... (URL: ${comment.html_url})`);
        });
    })
    .catch(error => {
        console.error('Failed to fetch comments:', error);
    });
