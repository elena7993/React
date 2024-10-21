const webSite = [
  {
    id: 0,
    title: "네이버",
    logoImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg4tJDDQpjhr3BBLQpnmd3GqjXfx4Mg9HG-Q&s",
    siteUrl: "https://www.naver.com/",
  },
  {
    id: 0,
    title: "카카오",
    logoImg:
      "https://i.namu.wiki/i/GmQozcg0lMGkI_NXkm04l-14hJIGnxYdhfe98DUlKGHVunjQtRkn0ZaGgXI1DEdGzHCzUsJsLbEZlMveOEnoRQ.svg",
    siteUrl: "https://www.kakaocorp.com",
  },
  {
    id: 0,
    title: "유튜브",
    logoImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1280px-YouTube_Logo_%282013-2017%29.svg.png",
    siteUrl: "https://www.youtube.com/",
  },
];

const SiteEx = () => {
  return (
    <>
      {webSite.map((site) => (
        <div key={site.id}>
          <a href={site.url}>
            <img src={site.logoImg} alt={site.title} />
            <div>{site.title}</div>
          </a>
        </div>
      ))}
      ;
    </>
  );
};
export default SiteEx;
