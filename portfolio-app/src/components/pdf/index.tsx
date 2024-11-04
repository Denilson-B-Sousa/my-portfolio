import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    color: "#000",
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "extrabold",
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 6,
    color: "#000000",
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: "bold",
  },
  text: {
    margin: 2,
    paddingTop: 4,
  },
  skillsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skill: {
    backgroundColor: "#f0f0f0",
    padding: 4,
    margin: 2,
    borderRadius: 4,
  },
  bulletPoint: {
    width: 10,
    fontSize: 12,
  },

  title: {
    fontWeight: "bold",
    marginBottom: 4,
    paddingTop: 4,
  },

  link: {
    textDecoration: "none",
  },

  horizontalLine: {
    marginTop: 1,
    marginBottom: 15,
    height: 1, 
    backgroundColor: "#ccc",
  },
});

export const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Denilson Bezerra de Sousa</Text>
        <Text style={styles.subtitle}>Desenvolvedor Frontend</Text>
        <Text>Email: denilson.sousa@academico.ifg.edu.br</Text>
        <Text>Cel: 61994533249</Text>
        <Text>Cidade/UF: Luziânia/GO</Text>
        <Text>
          <Text>Social:</Text>
          &nbsp;
          <Link
            src="https://www.linkedin.com/in/denilson-bezerra-de-sousa-38b964257/"
            style={styles.link}
          >
            LinkedIn
          </Link>
          &nbsp; | &nbsp;
          <Link src="https://github.com/Denilson-B-Sousa" style={styles.link}>
            GitHub
          </Link>
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
        <View style={styles.horizontalLine} />

        <Text>
          <Text style={styles.bulletPoint}>• </Text>
          Bacharelado em Sistemas de Informação - Graduando - IFG (Câmpus
          Luziânia) - MAR/2024 até JAN/2027
        </Text>

        <Text>
          <Text style={styles.bulletPoint}>• </Text>
          Técnico em Informática para internet - Concluído - IFG (Câmpus
          Luziânia) - Conclusão em: Jan/2023
        </Text>
      </View>

      {/* Experiências */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiências</Text>
        <View style={styles.horizontalLine} />

        {[
          {
            title: "Estagiário Frontend",
            company: "Compass.UOL Tecnologia LTDA",
            period: "Mai 2024 - Out 2024",
            description: [
              "Atividades: Desenvolvimento de interfaces web com HTML, CSS, React e Tailwind CSS, implementação de testes com Vitest e cobertura com c8. Versionamento de código com Git e GitHub e colaboração em equipe, metodologias ágeis (Scrum) e criar soluções na nuvem com AWS, utilizando Simple Storage Service(S3) e Elastic Compute Cloud(EC2).",
            ],
          },
          {
            title: "Técnico em informática",
            company:
              "Instituto Federal de Ciência, Educação e Tecnologia de Goiás - Câmpus Luziânia",
            period: "Mai 2022 - Out 2022",
            description: [
              "Atividades: Auxílio no laboratório de robótica, incluindo manutenção em impressoras 3D e manipulação de componentes eletrônicos. Atividades de suporte e manutenção em informática.",
            ],
          },
        ].map((experience, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.text}>
              {experience.company} - {experience.period}
            </Text>

            <Text style={styles.text}>Cargo: {experience.title}</Text>
            {experience.description.map((desc, idx) => (
              <Text key={idx} style={styles.text}>
                {desc}
              </Text>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Linguagens</Text>
        <View style={styles.horizontalLine} />

        <Text>
          Inglês Intermediário: apto a ler textos técnicos da área de
          informática
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        <View style={styles.horizontalLine} />

        <View style={styles.skillsContainer}>
          {[
            "React",
            "Typescript",
            "Javascript",
            "HTML5",
            "CSS3",
            "Java",
            "Spring-Boot",
          ].map((skill, index) => (
            <Text key={index} style={styles.skill}>
              {skill.toUpperCase()}
            </Text>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);
