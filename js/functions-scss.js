
@function prc($pxOne, $pxTwo) {
  $result: calc($pxOne / $pxTwo) * 100%;
  @return $result;
}

@function rem($px) {
  $result: calc($px / 16) + rem;
  @return $result;
}

@function em($px) {
  $result: calc($px / 16) + em;
  @return $result;
}

@function vw($pcSize, $mobSize) {
  $addSize: calc($pcSize - $mobSize);
  $mobSize2: calc($mobSize / 16);
  $result: calc(#{$mobSize2 + rem} + #{$addSize} * ((100vw - 20rem) / 960));
  @return $result;
}

@function vh($pcSize, $mobSize) {
  $addSize: calc($pcSize - $mobSize);
  $mobSize2: calc($mobSize / 16);
  $result: calc(#{$mobSize2 + rem} + #{$addSize} * ((100vh - 20rem) / 960));
  @return $result;
}

@function lh($lh, $lhsize) {
   $result: calc($lh / $lhsize);
   @return $result;
}

