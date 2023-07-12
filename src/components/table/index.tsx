type TableProps = {
    data: any,
    colums: any,
}

const Table = ({ data, colums }: TableProps) => {
    const renderHeaders = colums.map((item: any) => {
        return <th key={item.dataIndex}>{item.title}</th>
    })
    const renderRows = data.map((item: any) => {
        const renderCells = colums.map((column: any) => {
            return <td
                key={column.dataIndex}
            >
                {column.render ? column.render(item) : item[column.dataIndex]}
            </td>
        })
        return <tr key={item.id}>{renderCells}</tr>
    })
    return (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    {renderHeaders}
                </tr>
            </thead>
            <tbody>
                {renderRows}
            </tbody>
        </table>
    )
}

export default Table