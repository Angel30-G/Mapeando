export default interface MainPageProps {
  variant?: string;
  videoLink: string;
  mapLink: string;
  SchoolName: string;
  activityText: string;
  place: string;
  brochureLink?: string;
  images?: {
    original: string;
    thumbnail: string;
    key: string;
  }[];
  downloadData?: any;
}
