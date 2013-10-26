<?php

namespace Weroots;

class Weroots {
  private static $helpers = array();

  public static function initialize() {
    self::require_helpers();
  }

  public static function helper($class_name) {
    if (!isset(self::$helpers[$class_name])) {
      self::$helpers[$class_name] = new $class_name();
    }
    return self::$helpers[$class_name];
  }

  public static function register_helper($class_name) {
    foreach (get_class_methods($class_name) as $method) {
      if (!function_exists($method)) {
        //call_user_func(__NAMESPACE__ ."\Weroots::$method");
        //$global_function_definition = "function $method() { \$helper = Weroots::helper('$class_name'); \$args = func_get_args(); return call_user_func_array(array(\$helper, '$method'), \$args); }";
        //eval($global_function_definition);
      }
    }
  }

  public static function require_helpers() {
    require_once Wordless::join_paths(dirname(__FILE__), "helpers.php");
    $helpers_path = self::theme_helpers_path();
    self::require_once_dir($helpers_path);
  }
}

?>
