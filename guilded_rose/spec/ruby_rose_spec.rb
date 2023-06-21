require 'ruby_rose'

describe GildedRose do

  describe "#update_quality" do
    it "does not change the name" do
      items = [Item.new("foo", 0, 0)]
      GildedRose.new(items).update_quality()
      expect(items[0].name).to eq "foo"
    end


    context "Aged Brie" do #brie dont work
        it "Aged Brie quality +1 --> sell_in > 10" do
            items = [Item.new("Aged Brie", 15, 10)]
            GildedRose.new(items).update_quality()
            expect(items[0].sell_in).to eq 14
            expect(items[0].quality).to eq 11
        end

        it "quality +2 --> sell_in = 10 days" do
            items = [Item.new("Aged Brie", 10, 10)]
            GildedRose.new(items).update_quality()
            expect(items[0].sell_in).to eq 9
            expect(items[0].quality).to eq 12
        end

        it "quality +2 --> sell_in = 6 days" do
            items = [Item.new("Aged Brie", 6, 10)]
            GildedRose.new(items).update_quality()
            expect(items[0].sell_in).to eq 5
            expect(items[0].quality).to eq 12
        end

        it "quality +3 --> sell_in = 5 days" do
            items = [Item.new("Aged Brie", 5, 10)]
            GildedRose.new(items).update_quality()
            expect(items[0].sell_in).to eq 4
            expect(items[0].quality).to eq 13
        end

        it "quality +3 --> sell_in = 2 days" do
            items = [Item.new("Aged Brie", 2, 10)]
            GildedRose.new(items).update_quality()
            expect(items[0].sell_in).to eq 1
            expect(items[0].quality).to eq 13
        end

        it "quality drops to 0 after concert" do 
            items = [Item.new("Aged Brie", 0, 10)]
            GildedRose.new(items).update_quality()
            expect(items[0].sell_in).to eq -1
            expect(items[0].quality).to eq 0
        end
    end


    context "Backstage Passes" do 
        it "quality +1 --> sell_in > 10" do 
            items = [Item.new("Backstage passes to a TAFKAL80ETC concert", 15, 10)]
            GildedRose.new(items).update_quality()
            expect(items[0].sell_in).to eq 14
            expect(items[0].quality).to eq 11
        end

        it "quality +2 --> sell_in = 10 days" do
            items = [Item.new("Backstage passes to a TAFKAL80ETC concert", 10, 10)]
            GildedRose.new(items).update_quality()
            expect(items[0].sell_in).to eq 9
            expect(items[0].quality).to eq 12
        end

        it "quality +2 --> sell_in = 6 days" do
            items = [Item.new("Backstage passes to a TAFKAL80ETC concert", 6, 10)]
            GildedRose.new(items).update_quality()
            expect(items[0].sell_in).to eq 5
            expect(items[0].quality).to eq 12
        end

        it "quality +3 --> sell_in = 5 days" do
            items = [Item.new("Backstage passes to a TAFKAL80ETC concert", 5, 10)]
            GildedRose.new(items).update_quality()
            expect(items[0].sell_in).to eq 4
            expect(items[0].quality).to eq 13
        end

        it "quality +3 --> sell_in = 2 days" do
            items = [Item.new("Backstage passes to a TAFKAL80ETC concert", 2, 10)]
            GildedRose.new(items).update_quality()
            expect(items[0].sell_in).to eq 1
            expect(items[0].quality).to eq 13
        end

        it "quality drops to 0 after concert" do 
            items = [Item.new("Backstage passes to a TAFKAL80ETC concert", 0, 10)]
            GildedRose.new(items).update_quality()
            expect(items[0].sell_in).to eq -1
            expect(items[0].quality).to eq 0
        end
    end

    it "tests Backstage passes' values after update" do
      items = [Item.new("Backstage passes to a TAFKAL80ETC concert", 7, 20)]
      GildedRose.new(items).update_quality()
      expect(items[0].sell_in).to eq 6
      expect(items[0].quality).to eq 22
    end

    it "tests Sulfuras never drops in quality" do
      items = [Item.new("Sulfuras, Hand of Ragnaros", 100, 45)]
      GildedRose.new(items).update_quality()
      expect(items[0].quality).to eq 45
      # program doesn't accept that Sulfuras has no sell_in value
    end

  end
end