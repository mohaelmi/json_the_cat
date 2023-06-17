const { fetchBreedDescription } = require("../breedFetcher")
const assert = require("chai").assert

describe("fetchBreedDescription", () => {
  it("returns description when pass valid name", (done) => {
    fetchBreedDescription("Chartreux", (error, desc) => {
      const expected = "The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well."
      assert.equal(error, null)
      assert.strictEqual(expected, desc.trim())
      done()
    })
  })

  it("returns undefined if there is no name", (done) => {
    const output = fetchBreedDescription("Charteereux", (error, desc) => {      
      console.log(desc);
    })

    assert.equal(output, undefined)
    done()
  })
})