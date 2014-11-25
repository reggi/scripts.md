# Markdown Manipulators

These are scripts that can be dropped within a markdown editor. 

The philosophy is that with using valid markdown you can still have some customization.

## `anchor-math`

Anchor Math allows you go create a list of things and add how long somehting is going to take, then the total will be automatically put at the top of the nested list.

Here's an example:

```
* Todo [](#total)
  * Go get some milk [10](#math)
  * Do some yoga [60](#math)
  * Go to the bank [40](#math)  
```

This would generate to:

* Todo 110m
  * Go get some milk 10m
  * Do some yoga 60m
  * Go to the bank 40m

__Note:__ I made "days" equal a seven-hour (rounding up) work day to forcast how long a project would take in business days. 
