var xjunjie = {
    compact: function(ary) {
        return ary.filter(it => it)
      },
    chunk: function(ary,size=1){
        let arr = []
        for(var i = 0;i < ary.length/size;i++){
          var arrs = ary.slice(i*size,(i+1)*size)
           arr.push(arrs)
        }
        return arr
    },
    cancat: function(...array){
      let len = array.length;
      let arr = [array[0]]
      for(let i = 0 ; i <len ; i++){
        let arrs = array[i]
        arr.push(array[i])
      }
      return arr
    },
    bind:function (f) {
      var fixedArgs = Array.from(arguments).slice(1)
      return function() {
          var args = Array.from(arguments)
          return f.apply(null, fixedArgs.concat(args))
      }
  },
  flip: function (func){
    return function(...args){
      return func(...args.reverse())
    }
  },
  /**
   * [before description]
   *
   * @return  {[type]}  [return description]
   */
  before : function(n,func){
    var times = 0
    return function(...args){
      times++
      if(times < n){
        return
      }else {
        return func(...args)
      }
    }
  },
  ary : function (func,n = f.length){
    return function(...args){
      return f(...args.slice(0,n))
    }
  },
  unary:function(f){
    return ary(f,1)
  },
  flattenDepth: function(ary, depth = 1) {
    var result = []
    for(var item of ary) {
        if (Array.isArray(item)) {
            var flattedItem = flattenDepth(item, depth - 1)
            result.push(...flattedItem)
        } else {
            result.push(item)
        }
    }
    return result
},
flattenDeep: function (ary) {
  return flattenDepth(ary, Infinity)
},
flatten:function (ary) {
  var result = []
  for (var item of ary) {
      if (Array.isArray(item)) {
          result.push(...item)
      } else {
          result.push(item)
      }
  }
  return result
},
spread: function(f){
  return function(ary){
    return f.apply(null,ary)
  }
},
/**
 * @param  {} f
 */
memoize: function(f){
  var cache = {}
  return function(arg){
    if(arg in cache){
      return cache
    }else{
      cache[arg] = 1
    }
  }
},
filer: function(ary,predicate){
      var result = []
      for(var i = 0 ; i < ary.length;i++){
        if(Text(ary[i],i,ary)){
          result.push(ary[i])
        }
      }
      return result
  },
  every : function(ary,predicate){
    for (var i= 0 ; i<ary,length ; i++) {
      if (test(ary[i],i,ary)){
        return true
      }
    }
    return false

  },
  some:  function(ary,predicate){
    for (var i= 0 ; i<ary,length ; i++) {
      if (test(ary[i],i,ary)){
        return false
      }
    }
    return true
  }



    





}