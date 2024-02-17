'use strict';
const portfolio = function() {
  return {
    title: '',
    positions: [],
    depo: 0,
    hash: 0,
    addPosition(pos) {
      const exist = this.positions.filter(item => item.ticker === pos.ticker)
      if (exist.length === 1) {
        this.refreshPosition(exist, pos)
      } else {
        this.hash += 1
        pos.id = this.hash
        this.positions.push(pos)
      }
    },
    refreshPosition(exist, pos) {
      const refresh = exist[0]
      refresh.price = (refresh.price * refresh.count + pos.price * pos.count) / (refresh.count + pos.count)
      refresh.count = refresh.count + pos.count
      refresh.stop = pos.stop
    },
    removePosition(pos) {
      this.positions.filter(item => item.id !== pos.id)
    }
  }
}

function Position(pTicker, pPrice, pCount, pStop) {
  this.ticker = pTicker;
  this.price = pPrice;
  this.count = pCount;
  this.stop = pStop;
}

const portfolio1 = portfolio()

const position = new Position('LKOH', 7000, 7, 6900)
const position1 = new Position('SBER', 280, 50, 270)
const position2 = new Position('SBER', 272, 50, 270)

portfolio1.addPosition(position)
portfolio1.addPosition(position1)
portfolio1.addPosition(position2)

console.log(portfolio1)
