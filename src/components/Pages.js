import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Pagination } from "react-bootstrap";

const Pages = observer(() => {
    const { device } = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <div className='pages'>
            {pages.map(page =>
                <div className={`pages-item ${device.page === page && "active"}`}
                    key={page}
                    onClick={() => device.setPage(page)}>
                    <span>{page}</span>
                </div>
            )}
        </div>
    );
});

export default Pages;
