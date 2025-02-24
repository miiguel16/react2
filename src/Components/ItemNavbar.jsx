export const ItemNavbar = ({ contentItem = 'item', myStyle }) => {
    return (
        <>
            <li className={myStyle}>
                <a href="">{contentItem}</a>
            </li>
        </>
    )
}
