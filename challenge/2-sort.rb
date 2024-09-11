###
#
#  Ordenar los argumentos enteros (ascendente)
#
###

result = []
ARGV.each do |arg|
    # omitir si no es un entero
    next if arg !~ /^-?[0-9]+$/

    # convertir a entero
    i_arg = arg.to_i

    # insertar el entero en la posición correcta
    is_inserted = false
    i = 0
    l = result.size
    while !is_inserted && i < l do
        if result[i] > i_arg
            result.insert(i, i_arg)
            is_inserted = true
            break
        else
            i += 1
        end
    end
    result << i_arg if !is_inserted
end

puts result
