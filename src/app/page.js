"use client"
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Header from "@/header/header";



export default function Home() {

    const pdfref = useRef();

    const downloadPdf = () => {
        const input = pdfref.current;

        html2canvas(input).then((canvas) => {

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;

            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = 30;
            // (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 15;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('resume.pdf')
        })
    };


    return (
        <div ref={pdfref}>

            <Header />


            <div className="mt-5">
                <button onClick={downloadPdf}>
                    download h
                </button>
            </div>
        </div>
    );
}
