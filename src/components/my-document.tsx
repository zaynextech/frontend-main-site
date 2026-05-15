import { Document, Page, View } from "@react-pdf/renderer";

import { Heading as PdfxHeading } from "@/components/pdfx/heading/pdfx-heading";
import { Text as PdfxText } from "@/components/pdfx/text/pdfx-text";

export default function MyDocument() {
  return (
    <Document>
      <Page size="A4" style={{ padding: 30 }}>
        <View>
          <PdfxHeading>
            My PDF Document
          </PdfxHeading>

          <PdfxText>
            Hello from PDFx.
          </PdfxText>
        </View>
      </Page>
    </Document>
  );
}