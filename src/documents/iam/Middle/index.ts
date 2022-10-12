import BaseMiddle from '../../../classes/BaseMiddle'
import IamSchema from '../Schema'

class Middle extends BaseMiddle {
  constructor(schema = IamSchema) {
    super(schema)
  }
}

export default new Middle()