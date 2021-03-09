import { createRef, useEffect } from "react";

/**
 * We do not use this library as dependencies as it add to many dependencies for nothing.
 *
 * @see https://github.com/wicksome/utterances-react
 */
const Utterances = ({
  repo,
  issueTerm = "pathname",
  label = "",
  theme = "github-light",
  crossorigin = "anonymous",
  async = true,
}: {
  repo: string;
  issueTerm?: string;
  label?: string;
  theme?:
    | "github-light"
    | "github-dark"
    | "github-dark-orange"
    | "preferred-color-scheme";
  crossorigin?: string;
  async?: boolean;
}) => {
  const rootElement = createRef<HTMLDivElement>();

  useEffect(() => {
    // Ensure script is loaded with the correct params by removing cached element
    while (rootElement.current?.firstChild) {
      rootElement.current.removeChild(rootElement.current.firstChild);
    }

    const utterancesScriptElement = document.createElement("script");

    Object.entries({
      src: "https://utteranc.es/client.js",
      crossorigin,
      async,
      "data-repo": repo,
      "data-issue-term": issueTerm,
      "data-label": label,
      "data-theme": theme,
    }).forEach(([key, value]) => {
      utterancesScriptElement.setAttribute(
        key,
        typeof value === "boolean" ? key.replace("data-", "") : value,
      );
    });

    rootElement.current?.appendChild(utterancesScriptElement);
  }, [repo, issueTerm, label, theme, crossorigin, async]);

  return <div ref={rootElement} id="utterances_container" />;
};

export default Utterances;
