function Site(props) {
    const { a_tag } = props
    let li = []
    for (let i = 0; i < a_tag.length; i++) {
        li = li.concat(<li><a href={a_tag[i].href}>{a_tag[i].txt}</a></li>)
    }
    return (
        <nav><ul>{li}</ul></nav>
    )
}
export default Site