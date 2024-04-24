"use client"
import Image from "next/image";
import Link from 'next/link';
import './style.css'

import * as React from "react"
import { Label } from "@/components/ui/label";
 

export default function Footer(){
    return (
        <div>
            <div className="decorative-stripe"></div>
            <div className="card-container">
                <div className="card-footer">
                    <Image
                    src='/logo-2.png'
                    alt='Logo'
                    width={120}
                    height={20} />
                </div>
                <div className="card-footer">
                    <Label className="card-description-text">Бронирование: заявка по телефону, предоплата за 2 суток проживания</Label>
                </div>
                <div className="card-footer">
                    <Label className="card-description-text">Принимаемые способы оплаты</Label>
                    <br/>
                    <Image
                    className="icons-style"
                    src='/payments.png'
                    alt='Logo'
                    width={196}
                    height={64} />
                </div>
                <div className="card-footer">
                    <Label className="card-title-text">Контакты</Label>
                    <br/>
                    <Label className="card-description-text" data-type="address">р. Абхазия, г. Сухум, ул. Генерала Дбар, 83</Label>
                    <br/>
                    <br/>
                    <div className="row">
                        <Image
                        className="icons-style"
                        src='/mail.png'
                        alt='Email'
                        width={16}
                        height={20} />
                        <Label className="card-description-text">
                            <Link href="mailto:General.Dbar@yandex.ru">General.Dbar@yandex.ru</Link>
                        </Label>

                    </div>
                    <br/>
                    <div className="row">
                        <Image
                        className="icons-style"
                        src='/phone.png'
                        alt='Phone'
                        width={16}
                        height={20} />
                        <Label className="card-description-text"><Link href="tel:+7(940)927-35-63">+7(940)927-35-63</Link> — Шазина (WhatsApp)</Label>
                        
                        
                    </div>
                </div>
            </div>
            
            <div className="card-container">
                <Label className="card-description-text">Отель Александрия © 2024 Все права защищены</Label>
            </div>

        </div>
    );
};