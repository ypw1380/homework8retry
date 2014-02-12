#! 1a.

game = "The Super Bowl is played "
def sentence(game)
	game + "Only in America!"
end
puts sentence(game)



#! 1b.

def maximum
  [100,10,-1000].max
end
puts maximum


#! 1c.

a = {toyota: "toyota: ", tesla: "tesla"}
b = ["Prius", "Model S"]
def added
   a[:toyota] + b[0] + ", " + a[:tesla] + b[1]
end
puts added


#! 2.

a = ["fizzbuzz", "fizzbuzz", "fizz", "fizzbuzz", "buzz"]
