
import React, { useEffect, useState } from "react";


export default function GithubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const GITHUB_USERNAME = "vMuhaymin"; // You can add your name

    async function loadRepos() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`

        );

        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`);
        }

        const data = await res.json();
        setRepos(data);
      } catch (err) {
        if (err.name === "AbortError") return; // ignore aborts
        console.error(err);
        setError("Could not load GitHub repositories. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadRepos();
    return () => controller.abort();
  }, []);

  // If nothing just hide the section
  if (!loading && !repos.length && !error) return null;

  return (
    <section id="github" className="section github">
      <div className="container">
        <h2 className="sec-title">Latest on GitHub</h2>

        {loading && <p className="max-600">Loading repositories...</p>}
        {error && <p className="max-600 error">{error}</p>}

        {!loading && !error && (
          <div className="github-grid">
            {repos.map((repo) => (
              <article key={repo.id} className="github-card glass">
                <h3>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {repo.name}
                  </a>
                </h3>

                {repo.description && (
                  <p className="github-desc">{repo.description}</p>
                )}

                <div className="github-meta">
                  {repo.language && <span>{repo.language}</span>}
                  <span>★ {repo.stargazers_count}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
