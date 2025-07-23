export default function BlogSearch() {
  return (
    <div className="sidebar-item blog-sidebar-search">
      <h4 className="stitle">Search</h4>
      <form>
        <input type="text" placeholder="Search here..." required />
        <button type="submit">
          <img src="/images/blog/icon/tabler_search.svg" alt="icon" />
        </button>
      </form>
    </div>
  );
}
