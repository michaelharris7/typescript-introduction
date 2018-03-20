var Blog;
(function (Blog) {
    var Post = /** @class */ (function () {
        function Post(post) {
            this.title = post.title;
            this.body = post.body;
        }
        Post.prototype.printPost = function () {
            console.log(this.title);
            console.log(this.body);
        };
        return Post;
    }());
    Blog.Post = Post;
})(Blog || (Blog = {}));
// Usually namespaces are in different files. It's shown here again so we can see them easier.
var Content;
(function (Content) {
    var Post = /** @class */ (function () {
        function Post(post) {
            this.title = post.title;
            this.body = post.body;
            this.slug = post.slug;
            this.seoKeywords = post.seoKeywords;
        }
        Post.prototype.printPost = function () {
            console.log(this.title);
            console.log(this.body);
        };
        return Post;
    }());
    Content.Post = Post;
})(Content || (Content = {}));
var blogPost = new Blog.Post({
    title: "My Great Post",
    body: "Some content"
});
blogPost.printPost();
var contentPost = new Content.Post({
    title: "My Great Post",
    body: "Some content",
    slug: 'my-great-post',
    seoKeywords: 'any, words'
});
contentPost.printPost();
//# sourceMappingURL=026_namespaces.js.map