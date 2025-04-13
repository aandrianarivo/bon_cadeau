import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";

// Styles pour le PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#523918",
  },
  text: {
    fontSize: 12,
    marginTop: 5,
    color: "#333",
  },
  qrCode: {
    width: 80,
    height: 80,
    marginTop: 10,
  },
  logo: {
    width: 100,
    height: 50,
    marginBottom: 10,
  },
});

const GiftCardPDF = ({
  giftCardNumber,
  forPerson,
  fromPerson,
}: {
  giftCardNumber: string;
  forPerson: string;
  fromPerson: string;
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Chèque cadeau</Text>
        <Text style={styles.text}>Bon cadeau n°{giftCardNumber}</Text>
        <Text style={styles.text}>Pour : {forPerson}</Text>
        <Text style={styles.text}>De la part de : {fromPerson}</Text>
      </View>
      <View style={styles.section}>
        <Image style={styles.logo} src="https://via.placeholder.com/100x50?text=Votre+Logo" />
        <Image style={styles.qrCode} src="https://via.placeholder.com/80?text=QR+Code" />
      </View>
    </Page>
  </Document>
);

export default GiftCardPDF;