if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/harekrishn/.gradle/caches/8.12/transforms/198a8ba71fa158d9eb63b59fdf17942f/transformed/hermes-android-0.78.3-debug/prefab/modules/libhermes/libs/android.x86_64/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/harekrishn/.gradle/caches/8.12/transforms/198a8ba71fa158d9eb63b59fdf17942f/transformed/hermes-android-0.78.3-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

