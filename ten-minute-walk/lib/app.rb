class App

  def tenminuteswalk(directions)
    n = directions.count("n")
    w = directions.count("w")
    s = directions.count("s")
    e = directions.count("e")

    if (directions.length == 10) && (n == s) && (w == e)
      true
    else
      false
    end
  end

end