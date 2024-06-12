import ReactPDF, { Page, Document, View, Text, StyleSheet, Image } from '@react-pdf/renderer'
import logo from '../../../assets/icons/Logo_Azul.png'


export const Credential = ({ data }) => {
    const fecha = new Date();
    const styles = StyleSheet.create({
        image: {
            width: '200px',
        },
        header: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: '10px',
            width: '100%',
        },
        page: {
            paddingVertical: '40px',
            paddingHorizontal: '35px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'start',
            gap: '20px',
        },
        title: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#1655A4',
        },
        text: {
            fontSize: '10px',
            fontWeight: 'normal',
        },
        section: {
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
        },
        footer: {
            position: 'absolute',
            bottom: '40px',
            right: '35px',
            fontSize: '10px',
            fontWeight: 'bolder',
        }
    })
    return (
        <Document>
            <Page style={styles.page} >
                <View style={styles.header}>
                    <Image src={logo} style={styles.image} />
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                }}>
                    <Text style={{ fontSize: '24px', fontWeight: 'bold' }}>Federación Patronal</Text>
                    <Text style={{ fontSize: '8px' }}>Av 51 n°770 - La Plata - Buenos Aires | +5492214290200 | wquiroga@fedpat.com.ar</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>TITULARES</Text>
                    <Text style={styles.text}>MONEYFI TECHNOLOGIES ARGENTINA S.A.S. - CUIT : 30718345347</Text>
                    <Text style={styles.text}>Numero de poliza colectiva: </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>ASEGURADO</Text>
                    <Text style={styles.text}>Nombre: {data.first_name + " " + data.last_Name}</Text>
                    <Text style={styles.text}>Cuil: {data.cuil}</Text>
                    <Text style={styles.text}>Fecha de nacimiento: {data.user_registration_date_box_1656279909}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>COBERTURA</Text>
                    <Text style={styles.text}>Seguro de Salud: ESENCIAL</Text>
                    <Text style={styles.text}>Periodo de cobertura: ANUAL</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.text}>Fecha de Emisión: {fecha.toLocaleDateString()}</Text>
                </View>
            </Page>
        </Document>
    )
}

const guia = `
Datos del Titular de la Póliza

    Nombre del titular de la póliza colectiva: MONEYFI TECHNOLOGIES ARGENTINA S.A.S. - CUIT : 30718345347
    Número de la póliza colectiva [A completar cuando nos la envién]
    Dirección y datos de contacto del titular.

Información del Asegurado

    Nombre completo del asegurado: [Datos del asegurado]
    Número de identificación (CUIT). [Datos del asegurado]
    Fecha de nacimiento [Datos del asegurado]

Detalles de la Cobertura

    Tipo de seguro: Salud
    Periodo de cobertura (fecha de inicio y fecha de fin): MENSUAL // SEMESTRAL // ANUAL
    Cobertura específica: ESENCIAL // PRO // SENIOR
    Suma asegurada (monto máximo cubierto): [A completar cuando nos la envién]
    úmero de identificación del asegurado dentro de la póliza colectiva.

Declaración y Firmas

    Logo CureMD+
    Lugar y fecha de emisión del certificado [Fecha de emisión]

`