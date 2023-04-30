import Modal from 'react-modal'
import styles from './style.module.scss'

import { FiX } from 'react-icons/fi'

import { OrderItemProps } from '@/pages/dashboard'
interface ModalOrderProps{
    isOpen: boolean
    onRequestClose: () => void
    order: OrderItemProps[]
}

export function ModalOrder(){
    return(
        <div>
            <h1>Detalhes do pedido</h1>
        </div>
    )
}