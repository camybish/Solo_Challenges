class GildedRose

  def initialize(items)
    @items = items
  end

  def update_quality() # a day passes
    @items.each do |item|
      case item.name
      when "Aged Brie"
        if item.quality < 50
          item.quality += 1 
        end
        item.sell_in -= 1
      when "Backstage passes to a TAFKAL80ETC concert" # find a way to globally keep the quality below 50
        case item.sell_in
        when -1..-Float::INFINITY 
          item.quality -= 2
        when 0
          item.quality = 0
        when 1..5
          item.quality += 3
        when 6..10
          item.quality += 2
        else  
          item.quality += 1
        end
        item.sell_in -= 1
        if item.quality > 50
          item.quality = 50
        end
      when "Sulfuras, Hand of Ragnaros"
        
      else
        if item.sell_in < 0
          item.quality -= 1
        end
        unless item.quality == 0
          item.quality -= 1
        end
        item.sell_in -= 1
      end
    end
  end
end

class Item
  attr_accessor :name, :sell_in, :quality

  def initialize(name, sell_in, quality)
    @name = name
    @sell_in = sell_in
    @quality = quality
  end

  def to_s()
    "#{@name}, #{@sell_in}, #{@quality}"
  end
end