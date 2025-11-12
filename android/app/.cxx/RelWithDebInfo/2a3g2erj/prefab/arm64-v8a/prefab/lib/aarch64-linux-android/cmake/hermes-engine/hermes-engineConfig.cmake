if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/harekrishn/.gradle/caches/8.12/transforms/8f764e3d611f1b04c96bf1f7360c3f96/transformed/hermes-android-0.78.3-release/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/harekrishn/.gradle/caches/8.12/transforms/8f764e3d611f1b04c96bf1f7360c3f96/transformed/hermes-android-0.78.3-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

