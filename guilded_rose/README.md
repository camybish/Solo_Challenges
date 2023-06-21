Quality
    never negative [T]
    50 max [T]
    decreases x2 fast if sell_in is negative

'Backstage Passes'
    quality +2 if 10 days or less (before SellIn date) [T] [X] -- (only brie fails)
    quality +3 if 5 days or less [T] [X] -- (both fail)
    quality drops to 0 after the concert [T]

Aged Brie
    quality +1 instead of -1

Sulfuras
    legendary
    quality never decreases [T]
    no SellIn value

Add: 
SellIn(quality) - number of days before an item can no longer be sold
    after X days, quality degrades twice as fast (except brie which increases in quality)

Conjured Items 
    quality x2 decrease compared to normal items

Change:
UpdateQuality method

DON'T CHANGE:
Items class or Items property

[T] = tested for
[X] = tests doesn't pass