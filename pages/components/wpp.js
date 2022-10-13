import React, { Component } from 'react'

import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'

export default class Wpp extends Component {
  render() {
    return <FloatingWhatsApp showPopup={false} popupMessage='Olá, como podemos ajudar?' headerTitle='Fale Conosco' style={{backgroundImage:'linear-gradient(261deg, #1bff00, #00000047)'}}/>
  }
}