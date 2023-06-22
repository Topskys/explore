interface IProps {
    message?: string;
}
function ErrorPage(props: IProps) {
    return (<div><h2>页面加载错误</h2><p>{props.message}</p></div>)
}

export default ErrorPage;