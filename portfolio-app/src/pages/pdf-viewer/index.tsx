
import { MyDocument } from "@components/pdf";
import { PDFViewer } from "@react-pdf/renderer";

export const PdfViewer = () => (
  <div className="flex justify-center items-center h-screen">
    <PDFViewer className="w-[80vw] h-[80vh]" >
      <MyDocument />
    </PDFViewer>
  </div>
);

