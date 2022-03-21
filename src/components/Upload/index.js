import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { Separator } from '../../styles/styles'
import './styles.css'


export default class UploadContainer extends Component {
    render(){
        return (
            <div className='bg p-3'>
                <span>Faça o upload do arquivo .csv para o processamento do relatório:</span>
                <Separator></Separator>
                {/* <Dropzone accept="image/*" onDropAccepted={() => {}}>
                    { ({ getRootProps , getInputProps , isDragActive , isDragReject }) => (

                    ) }
                </Dropzone> */}
            </div>
        )
    }
}