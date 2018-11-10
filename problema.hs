import Data.Char
import Data.List

cifreComune :: Int -> Int -> Bool
cifreComune x y =
  null $ xx `intersect` yy
  where
    xx = show x
    yy = show y

numere :: Int -> [Int]
numere n = filter (\x -> cifreComune (x * x) (x * x * x) ) [1..(n-1)]

main :: IO ()
main = do
  putStrLn ""
  print $ numere 100
