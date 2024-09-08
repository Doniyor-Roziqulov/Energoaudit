import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import {
    FaFacebook,
    FaInstagram,
    FaTelegramPlane,
    FaTwitter,
} from "react-icons/fa";
import { TfiAlignRight } from "react-icons/tfi";

const Contact = () => {
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <section className="pt-9 pb-9">
            <div className="container max-w-[1240px] mx-auto px-5">
                <div className="flex items-center gap-x-4 mb-4">
                    <TfiAlignRight className="text-2xl text-blue-500" />
                    <h1 className="text-4xl font-semibold">Aloqa</h1>
                </div>
                <div className="flex items-center min-[730px]:flex-row lg:items-start lg:gap-x-5 flex-col justify-between">
                    <div>
                        <Form
                            className="w-[280px] min-[480px]:w-[370px] min-[630px]:w-[450px] min-[730px]:w-[280px] min-[840px]:w-[370px] min-[900px]:w-[420px] lg:w-[600px]"
                            layout="vertical"
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off">
                            <Form.Item
                                label="Ismingizni kiriting"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Iltimos ismingizni kiriting!",
                                    },
                                ]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Familiya kiriting"
                                name="fname"
                                rules={[
                                    {
                                        required: true,
                                        message: "Iltimos familiya kiriting!",
                                    },
                                ]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Telefon raqam kiriting"
                                name="number"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Iltimos telefon raqamingizni kiriting!",
                                    },
                                ]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Xabar yozing"
                                name="textaria"
                                rules={[
                                    {
                                        required: true,
                                        message: "Xabar kiriting!",
                                    },
                                ]}>
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    className="w-full"
                                    type="primary"
                                    htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <div>
                        <div className="mb-3">
                            <strong className="block mb-3 text-2xl">
                                Manzil
                            </strong>
                            <a
                                className=" font-semibold text-neutral-600"
                                href="https://maps.app.goo.gl/8RNQG1hJ256K5aXa6"
                                target="_blank">
                                100128, O‘zbekiston, Toshkent sh. <br />,
                                Shayxantaxur tumani, Zulfiyaxanum, 12 ko‘ch.
                                5-etaj.
                            </a>
                        </div>
                        <div className="mb-3">
                            <strong className="block mb-3 text-2xl">
                                Qo'ng'iroq qiling
                            </strong>
                            <a
                                className="block mb-2 font-semibold text-neutral-600"
                                href="tel:+998993746920">
                                +998 (99) 374 69 20
                            </a>
                            <a
                                className="block font-semibold text-neutral-600"
                                href="tel:+998942860422">
                                +998 (94) 286 04 22
                            </a>
                        </div>
                        <div className="mb-3">
                            <strong className="block mb-3 text-2xl">
                                Email
                            </strong>
                            <a
                                className=" font-semibold text-neutral-600"
                                href="mailto:doniyorruziqulov33@gmail.com">
                                doniyorruziqulov33@gmail.com
                            </a>
                        </div>
                        <div className="flex gap-x-4 text-4xl">
                            <a
                                className="hover:scale-125 transition-all hover:text-blue-600"
                                href="https://www.instagram.com/rahmatullayev_dostonbek"
                                target="_blank">
                                <FaInstagram />
                            </a>
                            <a
                                className="hover:scale-125 transition-all hover:text-blue-600"
                                href="https://www.instagram.com/rahmatullayev_dostonbek"
                                target="_blank">
                                <FaTelegramPlane />
                            </a>
                            <a
                                className="hover:scale-125 transition-all hover:text-blue-600"
                                href="https://www.instagram.com/rahmatullayev_dostonbek"
                                target="_blank">
                                <FaFacebook />
                            </a>
                            <a
                                className="hover:scale-125 transition-all hover:text-blue-600"
                                href="https://www.instagram.com/rahmatullayev_dostonbek"
                                target="_blank">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
