import { Readable, Writable, Transform, Duplex} from 'node: stream'

class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100 ) {
        this.push(null)
  
      } else {
        const buff = Buffer.from(String(i))
  
        this.push(buff)
      }
    },1000)
  }
}

class MultiplyByStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback()
  }
}


class InverseNumberStream extends Transform {
  _write(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1
    callback()
  }
}
new  OneToHundredStream()
  .pipe(new MultiplyByStream())
  .pipe(new InverseNumberStream())