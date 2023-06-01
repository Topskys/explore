import { Suspense, lazy } from "react";

export default function LazyLoad(url: string) {
     // 通过lazy与import函数的配置返回组件
    const Module = lazy(() => import("./views" + url));
    // 装载到Suspense预加载工具里面
    return <Suspense
        fallback={<h2>加载中...</h2>}>
        <Module />
    </Suspense>
}