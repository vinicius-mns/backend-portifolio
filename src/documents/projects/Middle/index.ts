import BaseMiddle from '../../../classes/BaseMiddle'
import Schema from '../Schema'

class Middle extends BaseMiddle {
  constructor(schema = Schema) {
    super(schema)
  }
}

export default new Middle()