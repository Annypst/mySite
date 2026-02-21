"use client"

import { Badge } from "../../../../components/ui/badge"
import { Button } from "../../../../components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card"
import { useState } from "react"

//卡片组件
function CardImage({ title, description, image, badge,link }) {
  return (
    <Card className="m-4 relative w-full max-w-xs pt-0 hover:shadow-lg transition-shadow duration-300 inline-block align-top">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={image || "https://avatar.vercel.sh/shadcn1"}
        alt={title || "Event cover"}
        className="relative z-20 aspect-video w-full object-cover brightness-60  dark:brightness-40"
      />
      <CardHeader>
      
          <Badge variant="secondary">{badge || "Featured"}</Badge>

        <CardTitle>{title || "Design systems meetup"}</CardTitle>
        <CardDescription>
          {description || "A practical talk on component APIs, accessibility, and shipping faster."}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        {/* link是文章链接 */}
      <a href={link||"" } >  <Button className="w-full">阅读</Button></a>
      </CardFooter>
    </Card>
  )
}


const Essay = () => {
  // 博客数据
  const blogPosts = [
    // {
    //   id: 1,
    //   title: "文章测试",
    //   description: "详细介绍 React 18 的并发渲染、自动批处理等新特性",
    //   image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
    //   badge: "技术",
    //   link: "/bloghtml/bibao.html"
    // },
   
  ];

  // 搜索状态
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(blogPosts);

  // 搜索函数
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') {
      setSearchResults(blogPosts);
      return;
    }

    const results = blogPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.badge.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="mx-auto my-8 max-w-6xl px-4 sm:my-12 sm:px-6 lg:my-16 lg:px-8">
      {/* 页面标题 */}
      <div className="text-center mb-10">
        <p className="text-gray-600 dark:text-gray-400">除了技术博客之外写的乱七八糟的东西</p>
      </div>

      {/* 搜索框 */}
      <div className="max-w-md mx-auto mb-12">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            placeholder="搜索随笔文章，按回车搜索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:bg-dark dark:text-light"
          />
        </form>
        {searchTerm && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
            搜索结果: {searchResults.length} 篇文章
          </p>
        )}
      </div>

      {/* 博客卡片 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchResults.map(post => (
          <CardImage
            key={post.id}
            title={post.title}
            description={post.description}
            image={post.image}
            badge={post.badge}
            link={post.link}
          />
        ))}
      </div>

      {/* 无搜索结果提示 */}
      {searchResults.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold mb-2">未找到相关文章</h3>
          <p className="text-gray-500 dark:text-gray-400">
            尝试使用其他关键词搜索
          </p>
        </div>
      )}
    </div>
  )
}

export default Essay