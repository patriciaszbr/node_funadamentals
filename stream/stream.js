import { Readable} from 'node: stream'

class OneToHundredStream extends Readable {
  _read() {
    const i = this.index++

    if (i > 100 ) {
      this.push(null)

    } else {
      //this.push(i) // Dentros de streams nunca vao consequiser ler dados em formatos primitivos: numeros. Normalmente a leitura é feita através dos buffers.

      const buff = Buffer.from(String(i))

      this.push(buff)
    }

  }
}

new  OneToHundredStream().pipe(process.stdout)