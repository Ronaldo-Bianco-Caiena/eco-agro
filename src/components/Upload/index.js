import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { DropContainer, UploadMessage } from './styles'
import { Separator } from '../../styles/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUpload, faFileCircleQuestion, faFileCircleCheck, faPlay } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import './styles.css'


export default class UploadContainer extends Component {
    renderDragMessage = (isDragActive, isDragReject) => {
        if (!isDragActive) {
            return <UploadMessage>
                <FontAwesomeIcon className='icon' icon={faCloudUpload} />Arraste arquivos aqui ...</UploadMessage>
        }
        if (isDragReject) {
            return <UploadMessage type="error"><FontAwesomeIcon icon={faFileCircleQuestion} />Arquivo não suportado</UploadMessage>
        }

        return <UploadMessage type="success"><FontAwesomeIcon icon={faFileCircleCheck} />Solte os arquivos aqui</UploadMessage>
    }
    render() {
        return (
            <div className='bg p-3'>
                <span>Faça o upload do arquivo .csv para o processamento do relatório:</span>
                <Separator></Separator>
                <Dropzone accept="image/*" onDropAccepted={() => { }}>
                    {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                        <DropContainer
                            {...getRootProps()}
                            isDragActive={isDragActive}
                            isDragReject={isDragReject}
                        >
                            <input {...getInputProps()} />
                            {this.renderDragMessage(isDragActive, isDragReject)}
                        </DropContainer>
                    )}
                </Dropzone>
                <Separator></Separator>
                <div className='d-flex flex-row-reverse '>
                    <Button className='d-flex align-items-center' variant="success">Gerar Relatórios<FontAwesomeIcon className='icon' icon={faPlay} /></Button>{' '}
                </div>
            </div>
        )
    }
}