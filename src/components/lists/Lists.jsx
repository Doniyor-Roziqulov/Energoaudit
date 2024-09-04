import React from "react";
import { Space, Table, Tag } from "antd";
import { data } from "@/static";

const Lists = () => {
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Years",
            dataIndex: "year",
            key: "year",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
    ];
    return (
        <section className="py-8">
            <div className="container max-w-[1240px] mx-auto px-5">
                <Table
                    className="font-semibold italic bg-slate-200 text-gray-700 border rounded-md border-gray-500"
                    columns={columns}
                    dataSource={data}
                />
            </div>
        </section>
    );
};

export default Lists;
