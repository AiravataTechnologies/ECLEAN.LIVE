import BlogCategories from "../blog/BlogCategories";
import BlogRecentPost from "../blog/BlogRecentPost";
import BlogSearch from "../blog/BlogSearch";
import BlogTags from "../blog/BlogTags";

export default function BlogSidebar() {
  return (
    <div className="sidebar ms-xl-4">
      {/* blog search part start */}
      <BlogSearch />
      {/* blog search part end */}

      {/* blog categories part start */}
      <BlogCategories />
      {/* blog categories part end */}

      {/* blog recent post part start */}
      <BlogRecentPost />
      {/* blog recent post part end */}

      {/* blog tags part start */}
      <BlogTags />
      {/* blog tags part end */}
    </div>
  );
}
