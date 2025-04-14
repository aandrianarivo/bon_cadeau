import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#F5F5F5", 
    padding: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#523918", 
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  logo: {
    width: 120,
    height: 60,
  },
  mainContainer: {
    flexDirection: "row",
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    border: "1pt solid #E0E0E0",
    padding: 20,
  },
  leftSection: {
    flex: 2,
    paddingRight: 20,
    borderRight: "1pt dashed #D9D9D9", 
  },
  rightSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#523918", 
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "medium",
    color: "#666",
    marginBottom: 15,
  },
  text: {
    fontSize: 12,
    marginBottom: 8,
    color: "#333",
  },
  highlightedText: {
    fontSize: 12,
    color: "#523918",
    fontWeight: "bold",
    marginBottom: 8,
  },
  messageBox: {
    backgroundColor: "#F9F5F0", 
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
  },
  messageText: {
    fontSize: 11,
    color: "#523918",
    fontStyle: "italic",
  },
  qrCode: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  instructions: {
    fontSize: 10,
    color: "#777",
    textAlign: "center",
  },
  footer: {
    marginTop: 20,
    borderTop: "1pt solid #E0E0E0",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    fontSize: 10,
    color: "#999",
  },
  giftIcon: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 10,
    left: 10,
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
}) => {
  const issueDate = new Date().toLocaleDateString("fr-FR");
  const expirationDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString("fr-FR");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Chèque Cadeau</Text>
          <Image style={styles.logo} src="https://via.placeholder.com/120x60?text=Votre+Logo" />
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.leftSection}>
            <Image
              style={styles.giftIcon}
              src="https://via.placeholder.com/20?text=🎁"
            />
            <Text style={styles.title}>Bon Cadeau</Text>
            <Text style={styles.subtitle}>Un moment spécial à partager</Text>
            <Text style={styles.highlightedText}>Numéro du bon : {giftCardNumber}</Text>
            <Text style={styles.text}>Pour : {forPerson}</Text>
            <Text style={styles.text}>De la part de : {fromPerson}</Text>
            <Text style={styles.text}>Date d'émission : {issueDate}</Text>
            <Text style={styles.text}>Valable jusqu'au : {expirationDate}</Text>

            <View style={styles.messageBox}>
              <Text style={styles.messageText}>
                "Profitez de ce moment unique offert avec cœur. Que cette expérience soit mémorable !"
              </Text>
            </View>
          </View>

          <View style={styles.rightSection}>
            <Image style={styles.qrCode} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.475sj6R0A1guhH7edkpWhQHaHa%26pid%3DApi&f=1&ipt=4bef19b469860196dd04b83ce21d51401262286f4b668e7abca39bb7399455a1&ipo=images" />
            <Text style={styles.instructions}>
              Scannez ce QR Code pour vérifier votre bon cadeau ou présentez-le directement.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>www.votresite.com</Text>
          <Text style={styles.footerText}>Contact : contact@votresite.com | +33 1 23 45 67 89</Text>
        </View>
      </Page>
    </Document>
  );
};

export default GiftCardPDF;