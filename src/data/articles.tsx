export class ArticleDataPoint {
  title: string;
  subtitle: string;
  articleURL: string;
  thumbnailURL: string;
  tags: string[];
  firstPara: string;
  datePublished: string;

  constructor({
    title,
    subtitle,
    articleURL,
    thumbnailURL,
    tags,
    firstPara,
    datePublished,
  }: {
    title: string;
    subtitle: string;
    articleURL: string;
    thumbnailURL: string;
    tags: string[];
    firstPara: string;
    datePublished: string;
  }) {
    this.title = title;
    this.subtitle = subtitle;
    this.articleURL = articleURL;
    this.thumbnailURL = thumbnailURL;
    this.tags = tags;
    this.firstPara = firstPara;
    this.datePublished = datePublished;
  }
}

export const articlesData = [
  new ArticleDataPoint({
    title: 'Running Multiple Codex Agents on Different Git Branches',
    subtitle: 'Your new workflow for rapid ideation',
    articleURL:
      'https://open.substack.com/pub/rajpulapakura/p/running-multiple-codex-agents-on?r=3l7tn6&utm_campaign=post&utm_medium=web',
    thumbnailURL: '',
    tags: ['Substack', 'AI Engineering', 'Agents'],
    firstPara:
      'A practical write-up on orchestrating multiple Codex agents in one workflow.',
    datePublished: 'March 7, 2026',
  }),
];
