import ContentLoader from 'react-content-loader'

export const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={465}
      viewBox="0 0 280 465"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="135" cy="125" r="125" />
      <rect x="-1" y="264" rx="7" ry="7" width="280" height="30" />
      <rect x="-1" y="306" rx="13" ry="13" width="278" height="73" />
      <rect x="0" y="390" rx="13" ry="13" width="138" height="40" />
      <rect x="148" y="390" rx="18" ry="18" width="131" height="40" />
    </ContentLoader>
  )
}
