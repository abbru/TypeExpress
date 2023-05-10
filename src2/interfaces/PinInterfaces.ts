export enum Country {
    ae = 'ae',
    bh = 'bh',
    ca = 'ca',
    iq = 'iq',
    kw = 'kw',
    sa = 'sa',
    gb = 'gb',
    us = 'us'
}

export enum Carrier {
    etisalat = 'etisalat',
    du = 'du',
    stc = 'stc',
    zain = 'zain',
    tel = 'tel',
    ooredoo = 'ooredoo',
    mobily = 'mobily',
    ee = 'ee',
    o2 = 'o2',
    three = 'three',
    vodafone = 'vodafone',
    verizon = 'verizon'
}

export enum Status {
    Error = 'Error',
    Success = 'Success'
}

export interface PinDTO {
    msisdn: string,
    country: Country,
    carrier: Carrier,
    idsrv: number,
}

export interface PinFullDTO extends PinDTO {
    pin?: string,
}

export interface InfoMedia {
    status: Status,
    description: string,
    pinId?: string,
}

export interface PinGenerate extends InfoMedia {
    pinId: string,
}

export interface InfomediaPinGenerateBodyDTO {
    mx: string,
    mcc: string,
    mnc: string,
    productId: number,
    u: string,
    p: string,
    params: InfomediaPinGenerateBodyParamsDTO[]
}

export interface InfomediaPinGenerateBodyParamsDTO {
    key: string,
    value: string
}
