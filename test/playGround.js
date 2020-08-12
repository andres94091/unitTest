const assert = require('chai').assert
const controller = require('../api/playGround/controller')
const dummyData = require('../api/playGround/dummy')

describe("controllador de dummy test", function () {
  describe("Return funcion average", function () {
    it("should return a averrage of array of numbers", function () {
      result = controller.average(dummyData.ArrayAverrage)
      assert.equal(result, 2.5)
    })
    it("return of averrage should be a number", function () {
      result = controller.average(dummyData.ArrayAverrage)
      assert.typeOf(result, "number")
    })
  })
})



