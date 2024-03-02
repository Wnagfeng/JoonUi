interface IHelloword {
  message: string
}
const Hello = (props: IHelloword) => {
  return <h1>{props.message}</h1>
}
export default Hello
